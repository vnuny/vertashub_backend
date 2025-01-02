import axios from "axios";
import "dotenv/config";

const accessTokenDefaultPayload = {
  client_id: process.env.INSTAGRAM_CLIENT as string,
  client_secret: process.env.INSTAGRAM_SECRET as string,
  grant_type: "authorization_code",
  redirect_uri: process.env.INSTAGRAM_REDIRECT_URI as string
};

const longLifeTokenPayload = {
  grant_type: "ig_exchange_token",
  client_secret: process.env.INSTAGRAM_SECRET as string
};

export async function getInstagramTokens(code: string) {
  try {
    const accessTokenRes = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      new URLSearchParams({
        ...accessTokenDefaultPayload,
        code
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        transformResponse: (res: any) => {
          if (res) {
            res = res.replace(/"user_id":\s*(\d+)/g, '"user_id":"$1"');
            return JSON.parse(res);
          }
          return res;
        }
      }
    );
    const longLifeTokenRes = await axios.get(
      `https://graph.instagram.com/access_token`,
      {
        params: {
          ...longLifeTokenPayload,
          access_token: accessTokenRes.data.access_token
        }
      }
    );

    return {
      success: true,
      user_id: accessTokenRes.data.user_id,
      long_life_token: longLifeTokenRes.data.access_token,
      long_life_token_expires_at: getExpirationDate(
        longLifeTokenRes.data.expires_in
      )
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to get Instagram tokens"
    };
  }
}

function getExpirationDate(expiresInSeconds: number) {
  const currentDate = new Date();
  const expirationDate = new Date(
    currentDate.getTime() + expiresInSeconds * 1000
  );
  return expirationDate;
}

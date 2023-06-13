declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH0_DOMAIN: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_REDIRECT_URI: string;
    }
  }
}

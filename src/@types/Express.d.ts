interface Usuario {
  id: number;
  email: string;
}

declare global {
  namespace Express {
      interface Request {
        usuario? : Usuario;
      }
  }
}

export default global;

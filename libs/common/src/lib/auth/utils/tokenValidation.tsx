const getJWTExpireDate = (jwtToken: string) => {
  if (jwtToken) {
    try {
      const [, payload] = jwtToken.split('.');
      const { exp: expires } = JSON.parse(window.atob(payload));
      if (typeof expires === 'number') {
        return new Date(expires * 1000);
      }
    } catch {
      // ignore
    }
  }
  return null;
};

export const validateToken = () => {
  const token: string | null = localStorage.getItem('token');
  return !!token;
};

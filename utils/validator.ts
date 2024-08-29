export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Adresse mail invalide.';

  return '';
};

export const passwordValidator = (password: string) => {
  if(!password) return "Mot de passe ne doit pas être vide"
  if (!password || password.length <= 5) return 'Au minumum 6 caractères sont requise';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Nom invalide.';

  return '';
};

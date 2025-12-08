export interface Utilisateur {
  id?: number;            // optionnel si JSON Server ajoute auto les IDs
  telephone: string;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  naissance: string | Date;   // selon comment tu veux manipuler la date
  adresse: string;
}


// interface pour le token (si besoin)
export interface AuthToken {
  token: string;
  expiration: Date;
}

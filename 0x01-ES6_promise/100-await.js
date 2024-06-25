import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    if (photo.body && user.firstName) {
      result = {
        photo,
        user,
      };
    }
  } catch (err) {
    if (err) {
      result = {
        photo: null,
        user: null,
      };
    }
  }
  return result;
}

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const deleteUser = functions.https.onCall(async (data, context) => {
  const db = admin.firestore();
  const batch = db.batch();

  const currentUserId = context.auth.uid;
  const userRef = db.collection('users').doc(currentUserId);
  
  const postsRef = db.collection('posts').where('owner', '==', userRef);
  const postsSnapshot = await postsRef.get();
  
  // Delete all posts and the user object
  postsSnapshot.docs.forEach(doc => batch.delete(doc.ref));
  batch.delete(userRef);

  return batch.commit();
});
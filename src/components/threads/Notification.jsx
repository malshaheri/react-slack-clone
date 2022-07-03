import { db } from "../../firebase";
//............................
import {
  addDoc,
  collection,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

//---------------------handleNew-----------------------------------
export const handleNew = async () => {
  const Name = prompt("Enter  name");
  const Message = prompt("Enter Message");
  const Description = prompt("Enter Description");

  const collectionRef = collection(db, "new");
  const payload = { Name, Message, Description };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};//---------------------handleEdit-----------------------------------


export const handleEdit = async (id) => {
  const Name = prompt("Enter  name");
  const Message = prompt("Enter Message");
  const Description = prompt("Enter Description");

  const docRef = doc(db, "new", id);
  const payload = { Name, Message, Description };

  setDoc(docRef, payload);
};
//---------------------handleDelete-----------------------------------

export const handleDelete = async (id) => {
  const docRef = doc(db, "new", id);
  await deleteDoc(docRef);
};

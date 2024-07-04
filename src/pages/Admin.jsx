import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../services/FirebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../App";
import Resizer from "react-image-file-resizer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Include the Quill stylesheet
import Dashboard from "../components/AdminDashboard";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const { currentUser } = useContext(AuthContext);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      Resizer.imageFileResizer(
        e.target.files[0],
        1280, // max width
        800, // max height
        "PNG", // format
        100, // quality
        0, // rotation
        (uri) => {
          setImage(uri);
        },
        "file" // output type
      );
    }
  };

  // Adjust the setDescription function for ReactQuill
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleUpload = async () => {
    if (!title.trim() || !description.trim() || !image) {
      setMessage("Please fill in all fields and select an image.");
      return;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function (if needed)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setMessage(`Upload is ${progress}% done`);
      },
      (error) => {
        setMessage(`Upload failed: ${error.message}`);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "posts"), {
          title,
          description,
          imageUrl: downloadURL,
          createdAt: new Date(),
          createdBy: currentUser.username,
        });
        setMessage("Upload successful!");
        setShowPopup(true); // Show popup on success

        // Clear input fields
        setTitle("");
        setDescription("");
        setImage(null);
      }
    );
  };

  return (
    <div className="mx-auto container flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-32 w-full space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-green-800">Upload new article</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
                className="h-screen rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="image" className="sr-only">Image</label>
              <input
                id="image"
                name="image"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
          {message && <p className="text-green-500 text-xs italic">{message}</p>}
        </form>
        <Dashboard />

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900">Upload Successful</h3>
              <p className="mt-2 text-sm text-gray-600">Your article has been uploaded successfully!</p>
              <button
                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;

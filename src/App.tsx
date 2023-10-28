import ImageUpload from "./Components/ImageUpload/ImageUpload";
import Input from "./Components/Input/Input";
import Output from "./Components/Output/Output";
import { useAppSelector } from "./hooks/reduxHooks";

function App() {
  const isUploaded = useAppSelector((state) => state.crop.isUploaded);
  return (
    <div className="flex flex-col md:flex-row">
      <Input />
      <Output />
      {/*  {isUploaded && <Output />}
      {!isUploaded && <ImageUpload />} */}
    </div>
  );
}

export default App;

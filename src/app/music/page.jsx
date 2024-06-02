import { MdFileUpload } from "react-icons/md";
import { UploadForm } from "./UploadForm";
import Table_Player from "@/components/Table_Player";
const MusicPage = () => {

    return (
        <div className="flex">
            <div className="w-1/2">
                <UploadForm />
            </div>
            <div className="w-1/2">
                <Table_Player />
            </div>
        </div>
    )
}
export default MusicPage



import { EDialogTypes, IBaseDialogProps } from "../../interfaces/IBaseDialogProps";
import BaseDialog from "../BaseDialog";

export default function ErrorDialog({ ...rest }: IBaseDialogProps) {
  return (
    <BaseDialog
      type={EDialogTypes.Error}
      cancelButtonText="Cancel"
      confirmButtonText="Report"
      {...rest}
    />
  );
}

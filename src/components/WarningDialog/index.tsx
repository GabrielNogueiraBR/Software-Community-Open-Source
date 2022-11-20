import { EDialogTypes, IBaseDialogProps } from "../../interfaces/IBaseDialogProps";
import BaseDialog from "../BaseDialog";

export default function WarningDialog({ ...rest }: IBaseDialogProps) {
  return (
    <BaseDialog
      type={EDialogTypes.Warning}
      cancelButtonText="No"
      confirmButtonText="Yes"
      {...rest}
    />
  );
}

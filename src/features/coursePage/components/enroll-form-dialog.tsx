import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const EnrollFormDialog = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  return (
    <Dialog open={open} onClose={closeModal} fullWidth>
      <DialogTitle sx={{display:"flex",alignItems:'center'}}>
        <Typography variant="h6" fontWeight={700} textAlign={"center"}>
          Enroll Yourself
        </Typography>
        <DialogActions>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </DialogTitle>
    </Dialog>
  );
};

export default EnrollFormDialog;

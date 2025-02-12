import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucidePhone, LucideMail } from "lucide-react";

export default function GetQuoteModal({ children }: { children: React.ReactNode }) {
  return (
      <Dialog>
          <DialogTrigger asChild>
              {children}
          </DialogTrigger>
          <DialogContent className="p-6 text-center rounded-lg shadow-lg">
              <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                  <p className="flex items-center text-lg text-muted-foreground gap-2">
                      <LucidePhone className="mr-2 text-blue-500" /> +91 9876543210
                  </p>
                  <p className="flex items-center text-lg text-muted-foreground gap-2">
                      <LucideMail className="mr-2 text-red-500" /> contact@bandsawmachines.com
                  </p>
              </div>
          </DialogContent>
      </Dialog>
  );
}
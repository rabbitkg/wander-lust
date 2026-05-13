"use client";

import {AlertDialog, Button} from "@heroui/react";
import { FaTrashAlt } from "react-icons/fa";

export function BookingCancelAlert({bookingId}) {

    const handleCancelBooking = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method: "DELETE",
            headers: {
                'content-type' : 'application/json'
            }
        })

        const data = await res.json();
        window.location.reload();

    }

  return (
    <AlertDialog>
      <Button 
      type="button"
      variant="outline"
      className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-5 py-2 rounded-md flex items-center gap-2 text-sm">
                      <FaTrashAlt />
                      Cancel
                    </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Back
              </Button>
              <Button
              onClick={handleCancelBooking}
              slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
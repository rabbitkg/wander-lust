"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export function CancelAlert({ destination }) {

    const router = useRouter();

    const { _id, destinationName } = destination;

    const handleDelete = async () => {

        const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        });

        const data = await res.json();

        console.log(data);

        if (data.deletedCount > 0) {
            router.push('/destinations');
        }
    };

    return (
        <AlertDialog>

            <AlertDialog.Trigger>
                <button className="flex items-center gap-2 border border-red-300 text-red-500 bg-white px-5 py-2 text-sm hover:bg-red-500 hover:text-white transition cursor-pointer">
                    <FaTrash size={12} />
                    Cancel
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Cancel Destination permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel{" "}
                                <strong>{destinationName}</strong>.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button
                                onClick={handleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Delete Destination
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
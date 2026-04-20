import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import CreateProblemForm from "@/modules/problems/components/create-problem-form";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateProblemPage = async ({ searchParams }) => {
  const user = await currentUser();
  const resolvedParams = await searchParams;
  const editId = resolvedParams?.editId;

  let problemToEdit = null;

  if (editId) {
    problemToEdit = await db.problem.findUnique({
      where: { id: editId },
    });
  }

  const isEditMode = !!problemToEdit;

  // console.log("editId:", editId);
  // console.log("problemToEdit:", problemToEdit);

  return (
    <section className="flex flex-col items-center justify-center container mx-4 my-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link href={isEditMode ? "/problems" : "/"}>
          <Button variant={"outline"} size={"icon"}>
            <ArrowLeft className="size-4" />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-amber-400">
          {isEditMode
            ? `Editing: ${problemToEdit.title}`
            : `Welcome ${user?.firstName}! Create a Problem`}
        </h1>
        <ModeToggle />
      </div>

      <CreateProblemForm problemToEdit={problemToEdit} />
    </section>
  );
};

export default CreateProblemPage;

import { CreateWorksheetFromTemplate } from "@/app/worksheets/create/create-worksheet-from-template";
import { CreateWorksheetFromVademecum } from "@/app/worksheets/create/create-worksheet-from-vademecum";
import { WorksheetEditor } from "@/components/worksheets/editor/worksheet-editor";
import { fetchCurrentUser, fetchTemplate } from "@/lib/server-api";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Utwórz próbę",
};

interface WorksheetCreatePageProps {
  searchParams: Promise<{
    templateId?: string;
    from?: string;
    redirectTo?: string;
  }>;
}

const WorksheetCreatePage = async ({
  searchParams,
}: WorksheetCreatePageProps) => {
  const { templateId, from, redirectTo } = await searchParams;

  const { user, error: userError } = await fetchCurrentUser();
  if (userError) {
    return userError;
  }

  if (templateId) {
    const { template, error: templateError } = await fetchTemplate(templateId);
    if (templateError) {
      return templateError;
    }

    return (
      <CreateWorksheetFromTemplate
        template={template!}
        redirectTo={redirectTo}
        currentUser={user!}
      />
    );
  }

  if (from === "vademecum") {
    return (
      <CreateWorksheetFromVademecum
        redirectTo={redirectTo || "/worksheets"}
        currentUser={user!}
      />
    );
  }

  return (
    <WorksheetEditor
      mode="create"
      redirectTo={redirectTo || "/worksheets"}
      currentUser={user!}
    />
  );
};

export default WorksheetCreatePage;

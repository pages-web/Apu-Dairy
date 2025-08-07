"use client";

import { cn } from "@/src/lib/utils/utils";
import { useEffect } from "react";

const ErxesForm = ({
  brandId,
  formId,
  className,
  onCompleted,
  ...rest
}: {
  brandId: string;
  formId: string;
  className?: string;
  onCompleted?: (event: any) => void;
}) => {
  useEffect(() => {
    const w = window as any;

    w.erxesSettings = {
      forms: [
        {
          brand_id: brandId,
          form_id: formId,
          onAction: (data: any) => {
            onCompleted && onCompleted(data);
          },
        },
      ],
    };

    const id = "erxes-script-" + formId;

    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src =
        "https://apudairy.app.erxes.io/widgets/build/formWidget.bundle.js";
      script.async = true;

      const entry = document.getElementsByTagName("script")[0];
      if (entry && entry.parentNode) {
        entry.parentNode.insertBefore(script, entry);
      }
    }

    return () => {
      w.erxesSettings.forms = w.erxesSettings.forms.filter(
        (form: any) => form.form_id !== formId
      );

      const script = document.getElementById(id);
      if (script) script.remove();

      const container = document.getElementById("erxes-container-" + formId);
      if (container) container.remove();
    };
  }, [brandId, formId, onCompleted]);

  return (
    <div
      className={cn("erxes-form", className)}
      data-erxes-modal={formId}
      {...rest}
    />
  );
};

export default ErxesForm;

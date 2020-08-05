import React, { useRef, useCallback, useState } from "react";

import { Box, Input, Img, Button } from "@tlon/indigo-react";
import GlobalApi from "../../../../api/global";
import S3Client from "../../../../lib/s3";
import { useField } from "formik";
import {
  S3Configuration,
  S3Credentials,
  S3State,
} from "../../../../types/s3-update";
import { useS3 } from "../../../../lib/useS3";

interface ImageInputProps {
  id: string;
  name: string;
  label: string;
  url: string;
  api: GlobalApi;
  s3: S3State;
}

export function ImageInput(props: ImageInputProps) {
  const { name, id, label, url, api } = props;

  const { uploadDefault, canUpload } = useS3(props.s3);

  const [uploading, setUploading] = useState(false);

  const [, , { setValue, setError }] = useField(id);

  const ref = useRef<HTMLInputElement | null>(null);

  const onImageUpload = useCallback(async () => {
    const file = ref.current?.files?.item(0);

    if (!file || !canUpload) {
      return;
    }
    try {
      setUploading(true);
      const url = await uploadDefault(file);
      setUploading(false);
      setValue(url);
    } catch (e) {
      setError(e.message);
    }
  }, [ref.current, uploadDefault, canUpload, setUploading, setValue]);

  const onClick = useCallback(() => {
    ref.current?.click();
  }, [ref]);

  return (
    <Box display="flex">
      <Input type="text" label={label} id={id} />
      {canUpload && (
        <>
          <Button
            ml={1}
            border={3}
            borderColor="washedGray"
            style={{ marginTop: "18px" }}
            onClick={onClick}
          >
            {uploading ? "Uploading" : "Upload"}
          </Button>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileElement"
            ref={ref}
            accept="image/*"
            onChange={onImageUpload}
          />
        </>
      )}
    </Box>
  );
}

import React from "react";

const Warning = ({ previewAvailable }) => {
  return previewAvailable ? (
    <> </>
  ) : (
    <div>
      <h3 className="warning">No preview available for this song! Sorry!</h3>
    </div>
  );
};

export default Warning;

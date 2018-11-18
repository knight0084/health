export default params => {
  // params
  let {data, type, name} = params;

  if (!data) throw new Error('missing required params: data');

  // define default type and value if not provide, default type is '.xlsx', default name using with date of today
  type = type || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'; // excel
  name = name || `${new Date().toLocaleDateString()}-download`;

  // create blob、url and download-element, below using anchor
  const blob = new Blob([data], {type});
  const url = window.URL.createObjectURL(blob);
  const downLoadElement = document.createElement('a');

  // assign url and name to the download-element
  downLoadElement.href = url;
  downLoadElement.download = name;

  // append download-element to body
  document.body.appendChild(downLoadElement);

  // mock click download-element to download the blob
  downLoadElement.click();

  // remove the download-element from body after trigger download
  document.body.removeChild(downLoadElement);

  // revoke the url-resource
  window.URL.revokeObjectURL(url);

};

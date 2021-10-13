export const formatString = (text: string) => {
  text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  text.replace(/[^a-zA-Z0-9]/g, '');

  return text
}

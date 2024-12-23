import initTranslations from '@/app/i18n';

export const configTranslation = async (
  locale: string,
  namespace: Array<string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResources: (resources: any) => void
) => {
  try {
    const res = await initTranslations(locale, namespace);

    setResources(res.resources);
  } catch (err) {
    console.error(err);
  }
};

// GROQ-query's voor het ophalen van content uit Sanity.
export const allPageSlugs = `*[_type == "page" && defined(slug.current)].slug.current`;
export const pageBySlug = `*[_type == "page" && slug.current == $slug][0]{
  title, eyebrow, lead, metaTitle, metaDescription, isContact, form, intro, cards
}`;
export const allAssessmentSlugs = `*[_type == "assessment" && defined(slug.current)].slug.current`;
export const assessmentBySlug = `*[_type == "assessment" && slug.current == $slug][0]{
  title, phase, goal, time, form, feedback, extra, traits, intro, body, quote, faq
}`;
export const allPostSlugs = `*[_type == "blogPost" && defined(slug.current)].slug.current`;
export const allPosts = `*[_type == "blogPost"] | order(date desc){ title, slug, category, date, excerpt }`;
export const postBySlug = `*[_type == "blogPost" && slug.current == $slug][0]{
  title, category, date, excerpt, body, metaDescription
}`;

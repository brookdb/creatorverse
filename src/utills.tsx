export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  );
}
export function classifyLinks(inputString) {
  if (inputString == null) {
    return null;
  }
  // Split the input string into an array of links
  const links = inputString.split(',');

  // Categories
  const socialLinks = {
    youtube: '',
    twitter: '',
    github: '',
    linkedin: '',
    other: '',
  };

  links.forEach((link) => {
    if (link.includes('youtube.com')) {
      socialLinks.youtube = link;
    } else if (link.includes('twitter.com') || link.includes('x.com')) {
      socialLinks.twitter = link;
    } else if (link.includes('github.com')) {
      socialLinks.github = link;
    } else if (link.includes('linkedin.com')) {
      socialLinks.linkedin = link;
    } else {
      socialLinks.other = link;
    }
  });

  return socialLinks;
}

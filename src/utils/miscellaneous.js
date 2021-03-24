import DOMPurify from "dompurify";

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHtml
 *
 * @param {string} content Plain html string
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};

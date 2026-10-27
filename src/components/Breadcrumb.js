/**
 * Breadcrumb Component
 * Renders semantic, accessible breadcrumb trail with Schema.org JSON-LD support.
 */

export function renderBreadcrumb(items = []) {
  if (!items || items.length === 0) return "";

  const listItemsHtml = items.map((item, index) => {
    const isLast = index === items.length - 1;
    if (isLast || !item.url) {
      return `<li class="breadcrumb-current" aria-current="page">${item.name}</li>`;
    }

    return `
      <li>
        <a href="${item.url}">${item.name}</a>
      </li>
      <li class="breadcrumb-separator" aria-hidden="true">/</li>
    `;
  }).join("");

  return `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb Navigation">
      <div class="container">
        <ol class="breadcrumb-list">
          ${listItemsHtml}
        </ol>
      </div>
    </nav>
  `;
}

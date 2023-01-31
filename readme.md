# Gantt pdf export: Checkbox columns are always unchecked

When exporting a Gantt chart as a pdf, checkbox columns are unchecked in the exported pdf even when they should be checked.

## Running the example

Make sure that the `@bryntum` registry is registered in `.npmrc`:

```
@bryntum:registry=https://npm.bryntum.com
//npm.bryntum.com/:_authToken=<YOUR AUTH TOKEN HERE>
```

Run the following command to install dependencies and start the development server.

```powershell
npm start
```

## Observe the issue

1. When browsing to the running example at `http://localhost:5173/`, a Gantt chart with one task should be displayed. The chart has a checkbox column named Active, and the task has the corresponding field set to true, resulting in a checked field value.
2. Click the button `Export pdf` and inspect the generated pdf: The checkbox in the generated output will not be checked.
3. You are able to capture the html payload sent to the server using the browser developer tools. An example payload has been saved in the repository for ease of use: Click the `View example payload` button for navigating to the example payload for further inspection.
4. Observe that the sample payload does not make any requests that are blocked by CORS. Requests for Font Awesome have been rewritten to their respective CDNJS counterparts via `filterStyles`. Note that if you run the application with another address than `http://localhost:5173/`, you must change `filterStyles` in `Gantt.tsx` accordingly.
5. Using the Elements inspector of the browser developer tools, inspect the checkbox input element and observe that it does not have the `checked` attribute set. Below is an example of the html element:

```html
<div
  data-column="customField_active"
  data-column-id="customField_active2"
  class="b-grid-cell b-check-cell b-widget-cell b-grid-cell-align-center"
  role="gridcell"
  aria-colindex="2"
  tabindex="-1"
  style="min-width: 60px; width: 100px"
>
  <div
    class="b-widget b-field b-checkbox"
    role="presentation"
    id="b-checkbox-4"
  >
    <div
      data-owner-cmp="b-checkbox-4"
      class="b-field-inner"
      role="presentation"
    >
      <input
        data-owner-cmp="b-checkbox-4"
        type="checkbox"
        name="b-checkbox-4"
        id="b-checkbox-4-input"
        autocomplete="off"
        role="presentation"
      /><label
        data-owner-cmp="b-checkbox-4"
        class="b-checkbox-label"
        for="b-checkbox-4-input"
      ></label>
    </div>
  </div>
</div>
```

## Notes

When inspecting the checkbox element on the running Gantt app page, a few pecularities are observed:

1. The input element of type checkbox, does not have the checked attribute applied.
2. When comparing with the payload sent to the print server above, the original `b-checkbox-1*` strings have been replaced with `b-checkbox-4*` in the payload sent to the server.

```html
<div
  data-column="customField_active"
  data-column-id="customField_active2"
  class="b-grid-cell b-check-cell b-widget-cell b-grid-cell-align-center"
  role="gridcell"
  aria-colindex="2"
  tabindex="-1"
  style="min-width: 60px; width: 100px;"
  aria-label="Active"
  aria-selected="false"
>
  <div
    class="b-widget b-field b-checkbox"
    role="presentation"
    id="b-checkbox-1"
  >
    <div
      data-owner-cmp="b-checkbox-1"
      class="b-field-inner"
      role="presentation"
    >
      <input
        data-owner-cmp="b-checkbox-1"
        type="checkbox"
        name="b-checkbox-1"
        id="b-checkbox-1-input"
        autocomplete="off"
        role="presentation"
      /><label
        data-owner-cmp="b-checkbox-1"
        class="b-checkbox-label"
        for="b-checkbox-1-input"
      ></label>
    </div>
  </div>
</div>
```

export default function Add() {
    return(
        <form action="/upload" enctype="multipart/form-data" method="post">
<label>simple<input type="text" name="text_single" autofocus /></label><br />
<label>array text 0<input type="text" name="text_multiple[]" /></label><br />
<label>array text 1<input type="text" name="text_multiple[]" /></label><br />
<label>file simple<input type="file" name="file_single" /></label><br />
<label>file attribute multiple<input type="file" name="file_multiple" multiple /></label><br />
<label>file html array0<input type="file" name="filearray[]" /></label><br />
<label>file html array1<input type="file" name="filearray[]" /></label><br />
<label>file html array and mulitple0<input type="file" name="filearray_with_multiple[]" multiple /></label><br />
<label>file html array and mulitple1<input type="file" name="filearray_with_multiple[]" multiple /></label><br />
<br />
<button>Upload</button>
</form>
    )
}



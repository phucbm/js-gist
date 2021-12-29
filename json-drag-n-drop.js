/**
 * Read JSON files from Drag n Drop
 * https://web.dev/read-files
 * @constructor
 */
function jsonDnDFileReader(config){
    const options = {
        ...{
            dropArea: document.getElementById('drop-area'),
            confirmText: '',
            onLoad: () => {
            }
        }, ...config
    };

    const readFiles = event => {
        for(const file of event.dataTransfer.files){
            // Check if the file is a JSON.
            if(!file.type && file.type !== 'application/json'){
                alert('File is not a JSON.');
                return;
            }

            // read file
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                if(typeof options.onLoad === 'function'){
                    options.onLoad({file, reader, event, result: JSON.parse(reader.result)});
                }
            });
            reader.readAsText(file);
        }
    }

    // drag over
    options.dropArea.addEventListener('dragover', (event) => {
        event.stopPropagation();
        event.preventDefault();

        // Style the drag-and-drop as a "copy file" operation.
        event.dataTransfer.dropEffect = 'copy';
    });

    // drop
    options.dropArea.addEventListener('drop', (event) => {
        event.stopPropagation();
        event.preventDefault();

        if(options.confirmText.length){
            if(confirm(options.confirmText) === true){
                readFiles(event);
            }
        }else{
            readFiles(event);
        }
    });
}
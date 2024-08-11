import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class PreviewPDF extends NavigationMixin(LightningElement) {

    //ContentDocument and ContentHubItem 

    navigateToFiles() {
        this[NavigationMixin.Navigate]({
          type: "standard__namedPage",
          attributes: {
            pageName: "filePreview",
          },
          state: {
            recordIds: "069aj000005t0cPAAQ",
            selectedRecordId: "069aj000005t0cPAAQ",
          },
        });
      }

}
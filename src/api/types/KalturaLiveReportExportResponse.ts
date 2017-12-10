
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveReportExportResponseArgs  extends KalturaObjectBaseArgs {
    referenceJobId? : number;
	reportEmail? : string;
}


export class KalturaLiveReportExportResponse extends KalturaObjectBase {

    referenceJobId : number;
	reportEmail : string;

    constructor(data? : KalturaLiveReportExportResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveReportExportResponse' },
				referenceJobId : { type : 'n' },
				reportEmail : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveReportExportResponse',KalturaLiveReportExportResponse);

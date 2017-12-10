
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveReportExportParamsArgs  extends KalturaObjectBaseArgs {
    entryIds? : string;
	recpientEmail? : string;
	timeZoneOffset? : number;
	applicationUrlTemplate? : string;
}


export class KalturaLiveReportExportParams extends KalturaObjectBase {

    entryIds : string;
	recpientEmail : string;
	timeZoneOffset : number;
	applicationUrlTemplate : string;

    constructor(data? : KalturaLiveReportExportParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveReportExportParams' },
				entryIds : { type : 's' },
				recpientEmail : { type : 's' },
				timeZoneOffset : { type : 'n' },
				applicationUrlTemplate : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveReportExportParams',KalturaLiveReportExportParams);

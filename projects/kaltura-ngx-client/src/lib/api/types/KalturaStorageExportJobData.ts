
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageJobData, KalturaStorageJobDataArgs } from './KalturaStorageJobData';

export interface KalturaStorageExportJobDataArgs  extends KalturaStorageJobDataArgs {
    force? : boolean;
	createLink? : boolean;
	assetId? : string;
	externalUrl? : string;
	port? : number;
}


export class KalturaStorageExportJobData extends KalturaStorageJobData {

    force : boolean;
	createLink : boolean;
	assetId : string;
	externalUrl : string;
	port : number;

    constructor(data? : KalturaStorageExportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageExportJobData' },
				force : { type : 'b' },
				createLink : { type : 'b' },
				assetId : { type : 's' },
				externalUrl : { type : 's' },
				port : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStorageExportJobData'] = KalturaStorageExportJobData;
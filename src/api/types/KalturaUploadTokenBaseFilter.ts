
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUploadTokenBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
	userIdEqual? : string;
	statusEqual? : KalturaUploadTokenStatus;
	statusIn? : string;
	fileNameEqual? : string;
	fileSizeEqual? : number;
}


export class KalturaUploadTokenBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;
	userIdEqual : string;
	statusEqual : KalturaUploadTokenStatus;
	statusIn : string;
	fileNameEqual : string;
	fileSizeEqual : number;

    constructor(data? : KalturaUploadTokenBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadTokenBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				userIdEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaUploadTokenStatus, subType : 'KalturaUploadTokenStatus' },
				statusIn : { type : 's' },
				fileNameEqual : { type : 's' },
				fileSizeEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadTokenBaseFilter',KalturaUploadTokenBaseFilter);

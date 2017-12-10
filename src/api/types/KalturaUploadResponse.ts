
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUploadErrorCode } from './KalturaUploadErrorCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUploadResponseArgs  extends KalturaObjectBaseArgs {
    uploadTokenId? : string;
	fileSize? : number;
	errorCode? : KalturaUploadErrorCode;
	errorDescription? : string;
}


export class KalturaUploadResponse extends KalturaObjectBase {

    uploadTokenId : string;
	fileSize : number;
	errorCode : KalturaUploadErrorCode;
	errorDescription : string;

    constructor(data? : KalturaUploadResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadResponse' },
				uploadTokenId : { type : 's' },
				fileSize : { type : 'n' },
				errorCode : { type : 'en', subTypeConstructor : KalturaUploadErrorCode, subType : 'KalturaUploadErrorCode' },
				errorDescription : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadResponse',KalturaUploadResponse);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';

export interface KalturaServerFileResourceArgs  extends KalturaGenericDataCenterContentResourceArgs {
    localFilePath? : string;
	keepOriginalFile? : boolean;
}


export class KalturaServerFileResource extends KalturaGenericDataCenterContentResource {

    localFilePath : string;
	keepOriginalFile : boolean;

    constructor(data? : KalturaServerFileResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaServerFileResource' },
				localFilePath : { type : 's' },
				keepOriginalFile : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerFileResource',KalturaServerFileResource);

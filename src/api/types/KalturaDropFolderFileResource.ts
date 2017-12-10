
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';

export interface KalturaDropFolderFileResourceArgs  extends KalturaGenericDataCenterContentResourceArgs {
    dropFolderFileId? : number;
}


export class KalturaDropFolderFileResource extends KalturaGenericDataCenterContentResource {

    dropFolderFileId : number;

    constructor(data? : KalturaDropFolderFileResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFileResource' },
				dropFolderFileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFileResource',KalturaDropFolderFileResource);

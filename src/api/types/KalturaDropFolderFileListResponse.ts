
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDropFolderFileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDropFolderFileListResponse extends KalturaListResponse {

    readonly objects : KalturaDropFolderFile[];

    constructor(data? : KalturaDropFolderFileListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDropFolderFile, subType : 'KalturaDropFolderFile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFileListResponse',KalturaDropFolderFileListResponse);

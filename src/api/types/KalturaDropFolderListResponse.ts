
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDropFolderListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDropFolderListResponse extends KalturaListResponse {

    readonly objects : KalturaDropFolder[];

    constructor(data? : KalturaDropFolderListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDropFolderListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDropFolder, subType : 'KalturaDropFolder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderListResponse',KalturaDropFolderListResponse);


import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSync } from './KalturaFileSync';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLockFileSyncsResponseArgs  extends KalturaObjectBaseArgs {
    fileSyncs? : KalturaFileSync[];
	limitReached? : boolean;
	dcSecret? : string;
	baseUrl? : string;
}


export class KalturaLockFileSyncsResponse extends KalturaObjectBase {

    fileSyncs : KalturaFileSync[];
	limitReached : boolean;
	dcSecret : string;
	baseUrl : string;

    constructor(data? : KalturaLockFileSyncsResponseArgs)
    {
        super(data);
        if (typeof this.fileSyncs === 'undefined') this.fileSyncs = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLockFileSyncsResponse' },
				fileSyncs : { type : 'a', subTypeConstructor : KalturaFileSync, subType : 'KalturaFileSync' },
				limitReached : { type : 'b' },
				dcSecret : { type : 's' },
				baseUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLockFileSyncsResponse'] = KalturaLockFileSyncsResponse;
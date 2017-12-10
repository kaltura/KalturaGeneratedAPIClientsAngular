
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchResult } from './KalturaESearchResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchResponse extends KalturaObjectBase {

    readonly totalCount : number;
	readonly objects : KalturaESearchResult[];

    constructor(data? : KalturaESearchResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchResponse' },
				totalCount : { type : 'n', readOnly : true },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchResult, subType : 'KalturaESearchResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchResponse',KalturaESearchResponse);

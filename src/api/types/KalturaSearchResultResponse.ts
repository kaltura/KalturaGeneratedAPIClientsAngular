
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchResultResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSearchResultResponse extends KalturaObjectBase {

    readonly objects : KalturaSearchResult[];
	readonly needMediaInfo : boolean;

    constructor(data? : KalturaSearchResultResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSearchResultResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaSearchResult, subType : 'KalturaSearchResult' },
				needMediaInfo : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchResultResponse',KalturaSearchResultResponse);

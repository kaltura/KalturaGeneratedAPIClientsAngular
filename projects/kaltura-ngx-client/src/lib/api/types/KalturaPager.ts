
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPagerArgs  extends KalturaObjectBaseArgs {
    pageSize? : number;
	pageIndex? : number;
}


export class KalturaPager extends KalturaObjectBase {

    pageSize : number;
	pageIndex : number;

    constructor(data? : KalturaPagerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPager' },
				pageSize : { type : 'n' },
				pageIndex : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPager'] = KalturaPager;
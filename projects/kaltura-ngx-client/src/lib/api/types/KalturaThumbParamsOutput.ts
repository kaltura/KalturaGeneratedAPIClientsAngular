
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParams, KalturaThumbParamsArgs } from './KalturaThumbParams';

export interface KalturaThumbParamsOutputArgs  extends KalturaThumbParamsArgs {
    thumbParamsId? : number;
	thumbParamsVersion? : string;
	thumbAssetId? : string;
	thumbAssetVersion? : string;
	rotate? : number;
}


export class KalturaThumbParamsOutput extends KalturaThumbParams {

    thumbParamsId : number;
	thumbParamsVersion : string;
	thumbAssetId : string;
	thumbAssetVersion : string;
	rotate : number;

    constructor(data? : KalturaThumbParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParamsOutput' },
				thumbParamsId : { type : 'n' },
				thumbParamsVersion : { type : 's' },
				thumbAssetId : { type : 's' },
				thumbAssetVersion : { type : 's' },
				rotate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaThumbParamsOutput'] = KalturaThumbParamsOutput;
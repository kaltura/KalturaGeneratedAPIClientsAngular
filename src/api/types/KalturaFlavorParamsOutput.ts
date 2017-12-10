
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaFlavorParamsOutputArgs  extends KalturaFlavorParamsArgs {
    flavorParamsId? : number;
	commandLinesStr? : string;
	flavorParamsVersion? : string;
	flavorAssetId? : string;
	flavorAssetVersion? : string;
	readyBehavior? : number;
}


export class KalturaFlavorParamsOutput extends KalturaFlavorParams {

    flavorParamsId : number;
	commandLinesStr : string;
	flavorParamsVersion : string;
	flavorAssetId : string;
	flavorAssetVersion : string;
	readyBehavior : number;

    constructor(data? : KalturaFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParamsOutput' },
				flavorParamsId : { type : 'n' },
				commandLinesStr : { type : 's' },
				flavorParamsVersion : { type : 's' },
				flavorAssetId : { type : 's' },
				flavorAssetVersion : { type : 's' },
				readyBehavior : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorParamsOutput',KalturaFlavorParamsOutput);

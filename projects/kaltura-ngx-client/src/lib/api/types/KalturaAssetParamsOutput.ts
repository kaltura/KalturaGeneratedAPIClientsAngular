
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';

export interface KalturaAssetParamsOutputArgs  extends KalturaAssetParamsArgs {
    assetParamsId? : number;
	assetParamsVersion? : string;
	assetId? : string;
	assetVersion? : string;
	readyBehavior? : number;
	format? : KalturaContainerFormat;
}


export class KalturaAssetParamsOutput extends KalturaAssetParams {

    assetParamsId : number;
	assetParamsVersion : string;
	assetId : string;
	assetVersion : string;
	readyBehavior : number;
	format : KalturaContainerFormat;

    constructor(data? : KalturaAssetParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParamsOutput' },
				assetParamsId : { type : 'n' },
				assetParamsVersion : { type : 's' },
				assetId : { type : 's' },
				assetVersion : { type : 's' },
				readyBehavior : { type : 'n' },
				format : { type : 'es', subTypeConstructor : KalturaContainerFormat, subType : 'KalturaContainerFormat' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetParamsOutput'] = KalturaAssetParamsOutput;
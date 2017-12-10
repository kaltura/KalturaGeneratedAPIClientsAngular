
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';

export interface KalturaAssetParamsResourceContainerArgs  extends KalturaResourceArgs {
    resource? : KalturaContentResource;
	assetParamsId? : number;
}


export class KalturaAssetParamsResourceContainer extends KalturaResource {

    resource : KalturaContentResource;
	assetParamsId : number;

    constructor(data? : KalturaAssetParamsResourceContainerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParamsResourceContainer' },
				resource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' },
				assetParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetParamsResourceContainer',KalturaAssetParamsResourceContainer);

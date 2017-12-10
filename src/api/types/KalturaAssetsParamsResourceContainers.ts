
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetParamsResourceContainer } from './KalturaAssetParamsResourceContainer';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';

export interface KalturaAssetsParamsResourceContainersArgs  extends KalturaResourceArgs {
    resources? : KalturaAssetParamsResourceContainer[];
}


export class KalturaAssetsParamsResourceContainers extends KalturaResource {

    resources : KalturaAssetParamsResourceContainer[];

    constructor(data? : KalturaAssetsParamsResourceContainersArgs)
    {
        super(data);
        if (typeof this.resources === 'undefined') this.resources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetsParamsResourceContainers' },
				resources : { type : 'a', subTypeConstructor : KalturaAssetParamsResourceContainer, subType : 'KalturaAssetParamsResourceContainer' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetsParamsResourceContainers',KalturaAssetsParamsResourceContainers);

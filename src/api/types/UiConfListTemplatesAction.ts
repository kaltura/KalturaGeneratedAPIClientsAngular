
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';

import { KalturaUiConfFilter } from './KalturaUiConfFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfListTemplatesActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUiConfFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'uiConf' action 'listTemplates'.
 *
 * Usage: retrieve a list of available template UIConfs
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UiConfListTemplatesAction extends KalturaRequest<KalturaUiConfListResponse> {

    filter : KalturaUiConfFilter;
	pager : KalturaFilterPager;

    constructor(data? : UiConfListTemplatesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUiConfListResponse', responseConstructor : KalturaUiConfListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uiconf' },
				action : { type : 'c', default : 'listTemplates' },
				filter : { type : 'o', subTypeConstructor : KalturaUiConfFilter, subType : 'KalturaUiConfFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

